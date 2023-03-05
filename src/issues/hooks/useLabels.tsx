import { useQuery } from '@tanstack/react-query'
import { gitHubApi } from "../../api/gitHubApi"
import { sleep } from '../../helpers/sleep';
import { Label } from '../interfaces/labels';

const getLabels = async():Promise<Label[]> => {
    await sleep(2)
    const { data } = await gitHubApi.get<Label[]>('/labels');
    return data
}
export const useLabels = () => {
    const labelsQuery = useQuery(
        ['labels'],
        getLabels,
        {staleTime: 1000 * 60 * 60}
    )
    return labelsQuery
}

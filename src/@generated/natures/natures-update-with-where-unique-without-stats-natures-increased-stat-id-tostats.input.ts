import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { naturesWhereUniqueInput } from './natures-where-unique.input';
import { Type } from 'class-transformer';
import { naturesUpdateWithoutStats_natures_increased_stat_idTostatsInput } from './natures-update-without-stats-natures-increased-stat-id-tostats.input';

@InputType()
export class naturesUpdateWithWhereUniqueWithoutStats_natures_increased_stat_idTostatsInput {

    @Field(() => naturesWhereUniqueInput, {nullable:false})
    @Type(() => naturesWhereUniqueInput)
    where!: naturesWhereUniqueInput;

    @Field(() => naturesUpdateWithoutStats_natures_increased_stat_idTostatsInput, {nullable:false})
    @Type(() => naturesUpdateWithoutStats_natures_increased_stat_idTostatsInput)
    data!: naturesUpdateWithoutStats_natures_increased_stat_idTostatsInput;
}

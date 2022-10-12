import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { naturesWhereUniqueInput } from './natures-where-unique.input';
import { Type } from 'class-transformer';
import { naturesUpdateWithoutStats_natures_increased_stat_idTostatsInput } from './natures-update-without-stats-natures-increased-stat-id-tostats.input';
import { naturesCreateWithoutStats_natures_increased_stat_idTostatsInput } from './natures-create-without-stats-natures-increased-stat-id-tostats.input';

@InputType()
export class naturesUpsertWithWhereUniqueWithoutStats_natures_increased_stat_idTostatsInput {

    @Field(() => naturesWhereUniqueInput, {nullable:false})
    @Type(() => naturesWhereUniqueInput)
    where!: naturesWhereUniqueInput;

    @Field(() => naturesUpdateWithoutStats_natures_increased_stat_idTostatsInput, {nullable:false})
    @Type(() => naturesUpdateWithoutStats_natures_increased_stat_idTostatsInput)
    update!: naturesUpdateWithoutStats_natures_increased_stat_idTostatsInput;

    @Field(() => naturesCreateWithoutStats_natures_increased_stat_idTostatsInput, {nullable:false})
    @Type(() => naturesCreateWithoutStats_natures_increased_stat_idTostatsInput)
    create!: naturesCreateWithoutStats_natures_increased_stat_idTostatsInput;
}

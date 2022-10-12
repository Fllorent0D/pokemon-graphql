import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { naturesWhereUniqueInput } from './natures-where-unique.input';
import { Type } from 'class-transformer';
import { naturesCreateWithoutStats_natures_decreased_stat_idTostatsInput } from './natures-create-without-stats-natures-decreased-stat-id-tostats.input';

@InputType()
export class naturesCreateOrConnectWithoutStats_natures_decreased_stat_idTostatsInput {

    @Field(() => naturesWhereUniqueInput, {nullable:false})
    @Type(() => naturesWhereUniqueInput)
    where!: naturesWhereUniqueInput;

    @Field(() => naturesCreateWithoutStats_natures_decreased_stat_idTostatsInput, {nullable:false})
    @Type(() => naturesCreateWithoutStats_natures_decreased_stat_idTostatsInput)
    create!: naturesCreateWithoutStats_natures_decreased_stat_idTostatsInput;
}

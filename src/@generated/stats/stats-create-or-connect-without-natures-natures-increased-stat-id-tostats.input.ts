import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { statsWhereUniqueInput } from './stats-where-unique.input';
import { Type } from 'class-transformer';
import { statsCreateWithoutNatures_natures_increased_stat_idTostatsInput } from './stats-create-without-natures-natures-increased-stat-id-tostats.input';

@InputType()
export class statsCreateOrConnectWithoutNatures_natures_increased_stat_idTostatsInput {

    @Field(() => statsWhereUniqueInput, {nullable:false})
    @Type(() => statsWhereUniqueInput)
    where!: statsWhereUniqueInput;

    @Field(() => statsCreateWithoutNatures_natures_increased_stat_idTostatsInput, {nullable:false})
    @Type(() => statsCreateWithoutNatures_natures_increased_stat_idTostatsInput)
    create!: statsCreateWithoutNatures_natures_increased_stat_idTostatsInput;
}

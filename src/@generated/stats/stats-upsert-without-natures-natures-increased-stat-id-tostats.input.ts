import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { statsUpdateWithoutNatures_natures_increased_stat_idTostatsInput } from './stats-update-without-natures-natures-increased-stat-id-tostats.input';
import { Type } from 'class-transformer';
import { statsCreateWithoutNatures_natures_increased_stat_idTostatsInput } from './stats-create-without-natures-natures-increased-stat-id-tostats.input';

@InputType()
export class statsUpsertWithoutNatures_natures_increased_stat_idTostatsInput {

    @Field(() => statsUpdateWithoutNatures_natures_increased_stat_idTostatsInput, {nullable:false})
    @Type(() => statsUpdateWithoutNatures_natures_increased_stat_idTostatsInput)
    update!: statsUpdateWithoutNatures_natures_increased_stat_idTostatsInput;

    @Field(() => statsCreateWithoutNatures_natures_increased_stat_idTostatsInput, {nullable:false})
    @Type(() => statsCreateWithoutNatures_natures_increased_stat_idTostatsInput)
    create!: statsCreateWithoutNatures_natures_increased_stat_idTostatsInput;
}

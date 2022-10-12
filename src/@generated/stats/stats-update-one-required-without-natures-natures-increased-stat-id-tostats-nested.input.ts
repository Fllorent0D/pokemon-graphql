import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { statsCreateWithoutNatures_natures_increased_stat_idTostatsInput } from './stats-create-without-natures-natures-increased-stat-id-tostats.input';
import { Type } from 'class-transformer';
import { statsCreateOrConnectWithoutNatures_natures_increased_stat_idTostatsInput } from './stats-create-or-connect-without-natures-natures-increased-stat-id-tostats.input';
import { statsUpsertWithoutNatures_natures_increased_stat_idTostatsInput } from './stats-upsert-without-natures-natures-increased-stat-id-tostats.input';
import { statsWhereUniqueInput } from './stats-where-unique.input';
import { statsUpdateWithoutNatures_natures_increased_stat_idTostatsInput } from './stats-update-without-natures-natures-increased-stat-id-tostats.input';

@InputType()
export class statsUpdateOneRequiredWithoutNatures_natures_increased_stat_idTostatsNestedInput {

    @Field(() => statsCreateWithoutNatures_natures_increased_stat_idTostatsInput, {nullable:true})
    @Type(() => statsCreateWithoutNatures_natures_increased_stat_idTostatsInput)
    create?: statsCreateWithoutNatures_natures_increased_stat_idTostatsInput;

    @Field(() => statsCreateOrConnectWithoutNatures_natures_increased_stat_idTostatsInput, {nullable:true})
    @Type(() => statsCreateOrConnectWithoutNatures_natures_increased_stat_idTostatsInput)
    connectOrCreate?: statsCreateOrConnectWithoutNatures_natures_increased_stat_idTostatsInput;

    @Field(() => statsUpsertWithoutNatures_natures_increased_stat_idTostatsInput, {nullable:true})
    @Type(() => statsUpsertWithoutNatures_natures_increased_stat_idTostatsInput)
    upsert?: statsUpsertWithoutNatures_natures_increased_stat_idTostatsInput;

    @Field(() => statsWhereUniqueInput, {nullable:true})
    @Type(() => statsWhereUniqueInput)
    connect?: statsWhereUniqueInput;

    @Field(() => statsUpdateWithoutNatures_natures_increased_stat_idTostatsInput, {nullable:true})
    @Type(() => statsUpdateWithoutNatures_natures_increased_stat_idTostatsInput)
    update?: statsUpdateWithoutNatures_natures_increased_stat_idTostatsInput;
}

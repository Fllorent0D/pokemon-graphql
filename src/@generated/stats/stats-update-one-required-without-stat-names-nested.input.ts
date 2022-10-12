import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { statsCreateWithoutStat_namesInput } from './stats-create-without-stat-names.input';
import { Type } from 'class-transformer';
import { statsCreateOrConnectWithoutStat_namesInput } from './stats-create-or-connect-without-stat-names.input';
import { statsUpsertWithoutStat_namesInput } from './stats-upsert-without-stat-names.input';
import { statsWhereUniqueInput } from './stats-where-unique.input';
import { statsUpdateWithoutStat_namesInput } from './stats-update-without-stat-names.input';

@InputType()
export class statsUpdateOneRequiredWithoutStat_namesNestedInput {

    @Field(() => statsCreateWithoutStat_namesInput, {nullable:true})
    @Type(() => statsCreateWithoutStat_namesInput)
    create?: statsCreateWithoutStat_namesInput;

    @Field(() => statsCreateOrConnectWithoutStat_namesInput, {nullable:true})
    @Type(() => statsCreateOrConnectWithoutStat_namesInput)
    connectOrCreate?: statsCreateOrConnectWithoutStat_namesInput;

    @Field(() => statsUpsertWithoutStat_namesInput, {nullable:true})
    @Type(() => statsUpsertWithoutStat_namesInput)
    upsert?: statsUpsertWithoutStat_namesInput;

    @Field(() => statsWhereUniqueInput, {nullable:true})
    @Type(() => statsWhereUniqueInput)
    connect?: statsWhereUniqueInput;

    @Field(() => statsUpdateWithoutStat_namesInput, {nullable:true})
    @Type(() => statsUpdateWithoutStat_namesInput)
    update?: statsUpdateWithoutStat_namesInput;
}

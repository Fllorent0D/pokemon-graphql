import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { statsCreateWithoutMove_meta_stat_changesInput } from './stats-create-without-move-meta-stat-changes.input';
import { Type } from 'class-transformer';
import { statsCreateOrConnectWithoutMove_meta_stat_changesInput } from './stats-create-or-connect-without-move-meta-stat-changes.input';
import { statsUpsertWithoutMove_meta_stat_changesInput } from './stats-upsert-without-move-meta-stat-changes.input';
import { statsWhereUniqueInput } from './stats-where-unique.input';
import { statsUpdateWithoutMove_meta_stat_changesInput } from './stats-update-without-move-meta-stat-changes.input';

@InputType()
export class statsUpdateOneRequiredWithoutMove_meta_stat_changesNestedInput {

    @Field(() => statsCreateWithoutMove_meta_stat_changesInput, {nullable:true})
    @Type(() => statsCreateWithoutMove_meta_stat_changesInput)
    create?: statsCreateWithoutMove_meta_stat_changesInput;

    @Field(() => statsCreateOrConnectWithoutMove_meta_stat_changesInput, {nullable:true})
    @Type(() => statsCreateOrConnectWithoutMove_meta_stat_changesInput)
    connectOrCreate?: statsCreateOrConnectWithoutMove_meta_stat_changesInput;

    @Field(() => statsUpsertWithoutMove_meta_stat_changesInput, {nullable:true})
    @Type(() => statsUpsertWithoutMove_meta_stat_changesInput)
    upsert?: statsUpsertWithoutMove_meta_stat_changesInput;

    @Field(() => statsWhereUniqueInput, {nullable:true})
    @Type(() => statsWhereUniqueInput)
    connect?: statsWhereUniqueInput;

    @Field(() => statsUpdateWithoutMove_meta_stat_changesInput, {nullable:true})
    @Type(() => statsUpdateWithoutMove_meta_stat_changesInput)
    update?: statsUpdateWithoutMove_meta_stat_changesInput;
}

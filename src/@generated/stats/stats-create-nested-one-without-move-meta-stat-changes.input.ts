import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { statsCreateWithoutMove_meta_stat_changesInput } from './stats-create-without-move-meta-stat-changes.input';
import { Type } from 'class-transformer';
import { statsCreateOrConnectWithoutMove_meta_stat_changesInput } from './stats-create-or-connect-without-move-meta-stat-changes.input';
import { statsWhereUniqueInput } from './stats-where-unique.input';

@InputType()
export class statsCreateNestedOneWithoutMove_meta_stat_changesInput {

    @Field(() => statsCreateWithoutMove_meta_stat_changesInput, {nullable:true})
    @Type(() => statsCreateWithoutMove_meta_stat_changesInput)
    create?: statsCreateWithoutMove_meta_stat_changesInput;

    @Field(() => statsCreateOrConnectWithoutMove_meta_stat_changesInput, {nullable:true})
    @Type(() => statsCreateOrConnectWithoutMove_meta_stat_changesInput)
    connectOrCreate?: statsCreateOrConnectWithoutMove_meta_stat_changesInput;

    @Field(() => statsWhereUniqueInput, {nullable:true})
    @Type(() => statsWhereUniqueInput)
    connect?: statsWhereUniqueInput;
}

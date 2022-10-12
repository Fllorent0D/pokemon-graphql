import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { statsWhereUniqueInput } from './stats-where-unique.input';
import { Type } from 'class-transformer';
import { statsCreateWithoutMove_meta_stat_changesInput } from './stats-create-without-move-meta-stat-changes.input';

@InputType()
export class statsCreateOrConnectWithoutMove_meta_stat_changesInput {

    @Field(() => statsWhereUniqueInput, {nullable:false})
    @Type(() => statsWhereUniqueInput)
    where!: statsWhereUniqueInput;

    @Field(() => statsCreateWithoutMove_meta_stat_changesInput, {nullable:false})
    @Type(() => statsCreateWithoutMove_meta_stat_changesInput)
    create!: statsCreateWithoutMove_meta_stat_changesInput;
}

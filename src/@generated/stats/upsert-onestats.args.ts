import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { statsWhereUniqueInput } from './stats-where-unique.input';
import { Type } from 'class-transformer';
import { statsCreateInput } from './stats-create.input';
import { statsUpdateInput } from './stats-update.input';

@ArgsType()
export class UpsertOnestatsArgs {

    @Field(() => statsWhereUniqueInput, {nullable:false})
    @Type(() => statsWhereUniqueInput)
    where!: statsWhereUniqueInput;

    @Field(() => statsCreateInput, {nullable:false})
    @Type(() => statsCreateInput)
    create!: statsCreateInput;

    @Field(() => statsUpdateInput, {nullable:false})
    @Type(() => statsUpdateInput)
    update!: statsUpdateInput;
}

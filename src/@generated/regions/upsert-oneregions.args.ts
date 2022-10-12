import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { regionsWhereUniqueInput } from './regions-where-unique.input';
import { Type } from 'class-transformer';
import { regionsCreateInput } from './regions-create.input';
import { regionsUpdateInput } from './regions-update.input';

@ArgsType()
export class UpsertOneregionsArgs {

    @Field(() => regionsWhereUniqueInput, {nullable:false})
    @Type(() => regionsWhereUniqueInput)
    where!: regionsWhereUniqueInput;

    @Field(() => regionsCreateInput, {nullable:false})
    @Type(() => regionsCreateInput)
    create!: regionsCreateInput;

    @Field(() => regionsUpdateInput, {nullable:false})
    @Type(() => regionsUpdateInput)
    update!: regionsUpdateInput;
}

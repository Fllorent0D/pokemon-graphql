import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { generationsWhereUniqueInput } from './generations-where-unique.input';
import { Type } from 'class-transformer';
import { generationsCreateInput } from './generations-create.input';
import { generationsUpdateInput } from './generations-update.input';

@ArgsType()
export class UpsertOnegenerationsArgs {

    @Field(() => generationsWhereUniqueInput, {nullable:false})
    @Type(() => generationsWhereUniqueInput)
    where!: generationsWhereUniqueInput;

    @Field(() => generationsCreateInput, {nullable:false})
    @Type(() => generationsCreateInput)
    create!: generationsCreateInput;

    @Field(() => generationsUpdateInput, {nullable:false})
    @Type(() => generationsUpdateInput)
    update!: generationsUpdateInput;
}

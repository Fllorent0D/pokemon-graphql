import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { generationsUpdateInput } from './generations-update.input';
import { Type } from 'class-transformer';
import { generationsWhereUniqueInput } from './generations-where-unique.input';

@ArgsType()
export class UpdateOnegenerationsArgs {

    @Field(() => generationsUpdateInput, {nullable:false})
    @Type(() => generationsUpdateInput)
    data!: generationsUpdateInput;

    @Field(() => generationsWhereUniqueInput, {nullable:false})
    @Type(() => generationsWhereUniqueInput)
    where!: generationsWhereUniqueInput;
}

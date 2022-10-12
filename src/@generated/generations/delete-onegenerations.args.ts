import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { generationsWhereUniqueInput } from './generations-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnegenerationsArgs {

    @Field(() => generationsWhereUniqueInput, {nullable:false})
    @Type(() => generationsWhereUniqueInput)
    where!: generationsWhereUniqueInput;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { generationsWhereInput } from './generations-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManygenerationsArgs {

    @Field(() => generationsWhereInput, {nullable:true})
    @Type(() => generationsWhereInput)
    where?: generationsWhereInput;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { typesWhereInput } from './types-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManytypesArgs {

    @Field(() => typesWhereInput, {nullable:true})
    @Type(() => typesWhereInput)
    where?: typesWhereInput;
}

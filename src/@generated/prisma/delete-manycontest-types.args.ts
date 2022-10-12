import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { contest_typesWhereInput } from '../contest-types/contest-types-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManycontestTypesArgs {

    @Field(() => contest_typesWhereInput, {nullable:true})
    @Type(() => contest_typesWhereInput)
    where?: contest_typesWhereInput;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { locationsWhereInput } from './locations-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManylocationsArgs {

    @Field(() => locationsWhereInput, {nullable:true})
    @Type(() => locationsWhereInput)
    where?: locationsWhereInput;
}

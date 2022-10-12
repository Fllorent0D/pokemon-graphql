import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_namesWhereInput } from '../move-names/move-names-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManymoveNamesArgs {

    @Field(() => move_namesWhereInput, {nullable:true})
    @Type(() => move_namesWhereInput)
    where?: move_namesWhereInput;
}

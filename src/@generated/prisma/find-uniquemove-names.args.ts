import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_namesWhereUniqueInput } from '../move-names/move-names-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquemoveNamesArgs {

    @Field(() => move_namesWhereUniqueInput, {nullable:false})
    @Type(() => move_namesWhereUniqueInput)
    where!: move_namesWhereUniqueInput;
}

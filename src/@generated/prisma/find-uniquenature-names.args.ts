import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { nature_namesWhereUniqueInput } from '../nature-names/nature-names-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquenatureNamesArgs {

    @Field(() => nature_namesWhereUniqueInput, {nullable:false})
    @Type(() => nature_namesWhereUniqueInput)
    where!: nature_namesWhereUniqueInput;
}

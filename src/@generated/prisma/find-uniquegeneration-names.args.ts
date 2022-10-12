import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { generation_namesWhereUniqueInput } from '../generation-names/generation-names-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquegenerationNamesArgs {

    @Field(() => generation_namesWhereUniqueInput, {nullable:false})
    @Type(() => generation_namesWhereUniqueInput)
    where!: generation_namesWhereUniqueInput;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { contest_type_namesWhereUniqueInput } from '../contest-type-names/contest-type-names-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnecontestTypeNamesArgs {

    @Field(() => contest_type_namesWhereUniqueInput, {nullable:false})
    @Type(() => contest_type_namesWhereUniqueInput)
    where!: contest_type_namesWhereUniqueInput;
}

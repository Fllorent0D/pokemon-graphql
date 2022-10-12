import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { contest_typesWhereUniqueInput } from '../contest-types/contest-types-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnecontestTypesArgs {

    @Field(() => contest_typesWhereUniqueInput, {nullable:false})
    @Type(() => contest_typesWhereUniqueInput)
    where!: contest_typesWhereUniqueInput;
}

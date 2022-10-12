import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { contest_type_namesUpdateInput } from '../contest-type-names/contest-type-names-update.input';
import { Type } from 'class-transformer';
import { contest_type_namesWhereUniqueInput } from '../contest-type-names/contest-type-names-where-unique.input';

@ArgsType()
export class UpdateOnecontestTypeNamesArgs {

    @Field(() => contest_type_namesUpdateInput, {nullable:false})
    @Type(() => contest_type_namesUpdateInput)
    data!: contest_type_namesUpdateInput;

    @Field(() => contest_type_namesWhereUniqueInput, {nullable:false})
    @Type(() => contest_type_namesWhereUniqueInput)
    where!: contest_type_namesWhereUniqueInput;
}

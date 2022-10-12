import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { contest_typesUpdateInput } from '../contest-types/contest-types-update.input';
import { Type } from 'class-transformer';
import { contest_typesWhereUniqueInput } from '../contest-types/contest-types-where-unique.input';

@ArgsType()
export class UpdateOnecontestTypesArgs {

    @Field(() => contest_typesUpdateInput, {nullable:false})
    @Type(() => contest_typesUpdateInput)
    data!: contest_typesUpdateInput;

    @Field(() => contest_typesWhereUniqueInput, {nullable:false})
    @Type(() => contest_typesWhereUniqueInput)
    where!: contest_typesWhereUniqueInput;
}

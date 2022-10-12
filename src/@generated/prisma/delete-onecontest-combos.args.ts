import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { contest_combosWhereUniqueInput } from '../contest-combos/contest-combos-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnecontestCombosArgs {

    @Field(() => contest_combosWhereUniqueInput, {nullable:false})
    @Type(() => contest_combosWhereUniqueInput)
    where!: contest_combosWhereUniqueInput;
}

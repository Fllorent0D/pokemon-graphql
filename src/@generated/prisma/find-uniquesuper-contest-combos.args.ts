import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { super_contest_combosWhereUniqueInput } from '../super-contest-combos/super-contest-combos-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquesuperContestCombosArgs {

    @Field(() => super_contest_combosWhereUniqueInput, {nullable:false})
    @Type(() => super_contest_combosWhereUniqueInput)
    where!: super_contest_combosWhereUniqueInput;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { super_contest_combosUpdateInput } from '../super-contest-combos/super-contest-combos-update.input';
import { Type } from 'class-transformer';
import { super_contest_combosWhereUniqueInput } from '../super-contest-combos/super-contest-combos-where-unique.input';

@ArgsType()
export class UpdateOnesuperContestCombosArgs {

    @Field(() => super_contest_combosUpdateInput, {nullable:false})
    @Type(() => super_contest_combosUpdateInput)
    data!: super_contest_combosUpdateInput;

    @Field(() => super_contest_combosWhereUniqueInput, {nullable:false})
    @Type(() => super_contest_combosWhereUniqueInput)
    where!: super_contest_combosWhereUniqueInput;
}

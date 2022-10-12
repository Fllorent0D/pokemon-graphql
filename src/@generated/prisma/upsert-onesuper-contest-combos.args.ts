import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { super_contest_combosWhereUniqueInput } from '../super-contest-combos/super-contest-combos-where-unique.input';
import { Type } from 'class-transformer';
import { super_contest_combosCreateInput } from '../super-contest-combos/super-contest-combos-create.input';
import { super_contest_combosUpdateInput } from '../super-contest-combos/super-contest-combos-update.input';

@ArgsType()
export class UpsertOnesuperContestCombosArgs {

    @Field(() => super_contest_combosWhereUniqueInput, {nullable:false})
    @Type(() => super_contest_combosWhereUniqueInput)
    where!: super_contest_combosWhereUniqueInput;

    @Field(() => super_contest_combosCreateInput, {nullable:false})
    @Type(() => super_contest_combosCreateInput)
    create!: super_contest_combosCreateInput;

    @Field(() => super_contest_combosUpdateInput, {nullable:false})
    @Type(() => super_contest_combosUpdateInput)
    update!: super_contest_combosUpdateInput;
}

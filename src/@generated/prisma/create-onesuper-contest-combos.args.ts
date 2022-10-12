import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { super_contest_combosCreateInput } from '../super-contest-combos/super-contest-combos-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnesuperContestCombosArgs {

    @Field(() => super_contest_combosCreateInput, {nullable:false})
    @Type(() => super_contest_combosCreateInput)
    data!: super_contest_combosCreateInput;
}

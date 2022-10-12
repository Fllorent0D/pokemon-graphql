import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { super_contest_combosUncheckedUpdateManyInput } from '../super-contest-combos/super-contest-combos-unchecked-update-many.input';
import { Type } from 'class-transformer';
import { super_contest_combosWhereInput } from '../super-contest-combos/super-contest-combos-where.input';

@ArgsType()
export class UpdateManysuperContestCombosArgs {

    @Field(() => super_contest_combosUncheckedUpdateManyInput, {nullable:false})
    @Type(() => super_contest_combosUncheckedUpdateManyInput)
    data!: super_contest_combosUncheckedUpdateManyInput;

    @Field(() => super_contest_combosWhereInput, {nullable:true})
    @Type(() => super_contest_combosWhereInput)
    where?: super_contest_combosWhereInput;
}

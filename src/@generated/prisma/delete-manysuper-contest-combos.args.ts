import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { super_contest_combosWhereInput } from '../super-contest-combos/super-contest-combos-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManysuperContestCombosArgs {

    @Field(() => super_contest_combosWhereInput, {nullable:true})
    @Type(() => super_contest_combosWhereInput)
    where?: super_contest_combosWhereInput;
}

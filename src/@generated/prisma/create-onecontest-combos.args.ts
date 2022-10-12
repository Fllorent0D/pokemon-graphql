import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { contest_combosCreateInput } from '../contest-combos/contest-combos-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnecontestCombosArgs {

    @Field(() => contest_combosCreateInput, {nullable:false})
    @Type(() => contest_combosCreateInput)
    data!: contest_combosCreateInput;
}

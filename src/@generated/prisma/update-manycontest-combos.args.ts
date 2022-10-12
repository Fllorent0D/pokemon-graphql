import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { contest_combosUncheckedUpdateManyInput } from '../contest-combos/contest-combos-unchecked-update-many.input';
import { Type } from 'class-transformer';
import { contest_combosWhereInput } from '../contest-combos/contest-combos-where.input';

@ArgsType()
export class UpdateManycontestCombosArgs {

    @Field(() => contest_combosUncheckedUpdateManyInput, {nullable:false})
    @Type(() => contest_combosUncheckedUpdateManyInput)
    data!: contest_combosUncheckedUpdateManyInput;

    @Field(() => contest_combosWhereInput, {nullable:true})
    @Type(() => contest_combosWhereInput)
    where?: contest_combosWhereInput;
}

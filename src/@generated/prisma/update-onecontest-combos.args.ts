import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { contest_combosUpdateInput } from '../contest-combos/contest-combos-update.input';
import { Type } from 'class-transformer';
import { contest_combosWhereUniqueInput } from '../contest-combos/contest-combos-where-unique.input';

@ArgsType()
export class UpdateOnecontestCombosArgs {

    @Field(() => contest_combosUpdateInput, {nullable:false})
    @Type(() => contest_combosUpdateInput)
    data!: contest_combosUpdateInput;

    @Field(() => contest_combosWhereUniqueInput, {nullable:false})
    @Type(() => contest_combosWhereUniqueInput)
    where!: contest_combosWhereUniqueInput;
}

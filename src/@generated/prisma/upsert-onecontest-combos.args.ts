import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { contest_combosWhereUniqueInput } from '../contest-combos/contest-combos-where-unique.input';
import { Type } from 'class-transformer';
import { contest_combosCreateInput } from '../contest-combos/contest-combos-create.input';
import { contest_combosUpdateInput } from '../contest-combos/contest-combos-update.input';

@ArgsType()
export class UpsertOnecontestCombosArgs {

    @Field(() => contest_combosWhereUniqueInput, {nullable:false})
    @Type(() => contest_combosWhereUniqueInput)
    where!: contest_combosWhereUniqueInput;

    @Field(() => contest_combosCreateInput, {nullable:false})
    @Type(() => contest_combosCreateInput)
    create!: contest_combosCreateInput;

    @Field(() => contest_combosUpdateInput, {nullable:false})
    @Type(() => contest_combosUpdateInput)
    update!: contest_combosUpdateInput;
}

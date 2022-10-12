import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { contest_combosWhereInput } from '../contest-combos/contest-combos-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManycontestCombosArgs {

    @Field(() => contest_combosWhereInput, {nullable:true})
    @Type(() => contest_combosWhereInput)
    where?: contest_combosWhereInput;
}

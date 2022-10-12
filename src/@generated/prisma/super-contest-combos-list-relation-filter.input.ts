import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { super_contest_combosWhereInput } from '../super-contest-combos/super-contest-combos-where.input';

@InputType()
export class Super_contest_combosListRelationFilter {

    @Field(() => super_contest_combosWhereInput, {nullable:true})
    every?: super_contest_combosWhereInput;

    @Field(() => super_contest_combosWhereInput, {nullable:true})
    some?: super_contest_combosWhereInput;

    @Field(() => super_contest_combosWhereInput, {nullable:true})
    none?: super_contest_combosWhereInput;
}

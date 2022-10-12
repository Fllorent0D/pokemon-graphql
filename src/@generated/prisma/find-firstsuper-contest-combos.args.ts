import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { super_contest_combosWhereInput } from '../super-contest-combos/super-contest-combos-where.input';
import { Type } from 'class-transformer';
import { super_contest_combosOrderByWithRelationInput } from '../super-contest-combos/super-contest-combos-order-by-with-relation.input';
import { super_contest_combosWhereUniqueInput } from '../super-contest-combos/super-contest-combos-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Super_contest_combosScalarFieldEnum } from './super-contest-combos-scalar-field.enum';

@ArgsType()
export class FindFirstsuperContestCombosArgs {

    @Field(() => super_contest_combosWhereInput, {nullable:true})
    @Type(() => super_contest_combosWhereInput)
    where?: super_contest_combosWhereInput;

    @Field(() => [super_contest_combosOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<super_contest_combosOrderByWithRelationInput>;

    @Field(() => super_contest_combosWhereUniqueInput, {nullable:true})
    cursor?: super_contest_combosWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Super_contest_combosScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Super_contest_combosScalarFieldEnum>;
}

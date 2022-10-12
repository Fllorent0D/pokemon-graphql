import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_changelogWhereInput } from '../move-changelog/move-changelog-where.input';
import { Type } from 'class-transformer';
import { move_changelogOrderByWithRelationInput } from '../move-changelog/move-changelog-order-by-with-relation.input';
import { move_changelogWhereUniqueInput } from '../move-changelog/move-changelog-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Move_changelogScalarFieldEnum } from './move-changelog-scalar-field.enum';

@ArgsType()
export class FindFirstmoveChangelogArgs {

    @Field(() => move_changelogWhereInput, {nullable:true})
    @Type(() => move_changelogWhereInput)
    where?: move_changelogWhereInput;

    @Field(() => [move_changelogOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<move_changelogOrderByWithRelationInput>;

    @Field(() => move_changelogWhereUniqueInput, {nullable:true})
    cursor?: move_changelogWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Move_changelogScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Move_changelogScalarFieldEnum>;
}

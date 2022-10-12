import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class version_groupsScalarWhereInput {

    @Field(() => [version_groupsScalarWhereInput], {nullable:true})
    AND?: Array<version_groupsScalarWhereInput>;

    @Field(() => [version_groupsScalarWhereInput], {nullable:true})
    OR?: Array<version_groupsScalarWhereInput>;

    @Field(() => [version_groupsScalarWhereInput], {nullable:true})
    NOT?: Array<version_groupsScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    generation_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    pokedex_id?: IntFilter;
}

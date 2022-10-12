import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class ability_changelogScalarWhereInput {

    @Field(() => [ability_changelogScalarWhereInput], {nullable:true})
    AND?: Array<ability_changelogScalarWhereInput>;

    @Field(() => [ability_changelogScalarWhereInput], {nullable:true})
    OR?: Array<ability_changelogScalarWhereInput>;

    @Field(() => [ability_changelogScalarWhereInput], {nullable:true})
    NOT?: Array<ability_changelogScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    ability_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    changed_in_version_group_id?: IntFilter;
}

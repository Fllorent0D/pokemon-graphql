import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class super_contest_effect_proseScalarWhereInput {

    @Field(() => [super_contest_effect_proseScalarWhereInput], {nullable:true})
    AND?: Array<super_contest_effect_proseScalarWhereInput>;

    @Field(() => [super_contest_effect_proseScalarWhereInput], {nullable:true})
    OR?: Array<super_contest_effect_proseScalarWhereInput>;

    @Field(() => [super_contest_effect_proseScalarWhereInput], {nullable:true})
    NOT?: Array<super_contest_effect_proseScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    super_contest_effect_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    local_language_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    flavor_text?: StringFilter;
}

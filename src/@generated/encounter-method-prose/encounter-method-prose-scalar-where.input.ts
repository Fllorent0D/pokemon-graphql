import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class encounter_method_proseScalarWhereInput {

    @Field(() => [encounter_method_proseScalarWhereInput], {nullable:true})
    AND?: Array<encounter_method_proseScalarWhereInput>;

    @Field(() => [encounter_method_proseScalarWhereInput], {nullable:true})
    OR?: Array<encounter_method_proseScalarWhereInput>;

    @Field(() => [encounter_method_proseScalarWhereInput], {nullable:true})
    NOT?: Array<encounter_method_proseScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    encounter_method_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    local_language_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;
}

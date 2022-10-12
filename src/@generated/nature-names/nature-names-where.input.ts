import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { LanguagesRelationFilter } from '../prisma/languages-relation-filter.input';
import { NaturesRelationFilter } from '../prisma/natures-relation-filter.input';

@InputType()
export class nature_namesWhereInput {

    @Field(() => [nature_namesWhereInput], {nullable:true})
    AND?: Array<nature_namesWhereInput>;

    @Field(() => [nature_namesWhereInput], {nullable:true})
    OR?: Array<nature_namesWhereInput>;

    @Field(() => [nature_namesWhereInput], {nullable:true})
    NOT?: Array<nature_namesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    nature_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    local_language_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => LanguagesRelationFilter, {nullable:true})
    languages?: LanguagesRelationFilter;

    @Field(() => NaturesRelationFilter, {nullable:true})
    natures?: NaturesRelationFilter;
}

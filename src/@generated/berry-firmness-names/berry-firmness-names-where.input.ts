import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { LanguagesRelationFilter } from '../prisma/languages-relation-filter.input';
import { Berry_firmnessRelationFilter } from '../prisma/berry-firmness-relation-filter.input';

@InputType()
export class berry_firmness_namesWhereInput {

    @Field(() => [berry_firmness_namesWhereInput], {nullable:true})
    AND?: Array<berry_firmness_namesWhereInput>;

    @Field(() => [berry_firmness_namesWhereInput], {nullable:true})
    OR?: Array<berry_firmness_namesWhereInput>;

    @Field(() => [berry_firmness_namesWhereInput], {nullable:true})
    NOT?: Array<berry_firmness_namesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    berry_firmness_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    local_language_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => LanguagesRelationFilter, {nullable:true})
    languages?: LanguagesRelationFilter;

    @Field(() => Berry_firmnessRelationFilter, {nullable:true})
    berry_firmness?: Berry_firmnessRelationFilter;
}

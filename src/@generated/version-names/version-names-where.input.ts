import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { LanguagesRelationFilter } from '../prisma/languages-relation-filter.input';
import { VersionsRelationFilter } from '../prisma/versions-relation-filter.input';

@InputType()
export class version_namesWhereInput {

    @Field(() => [version_namesWhereInput], {nullable:true})
    AND?: Array<version_namesWhereInput>;

    @Field(() => [version_namesWhereInput], {nullable:true})
    OR?: Array<version_namesWhereInput>;

    @Field(() => [version_namesWhereInput], {nullable:true})
    NOT?: Array<version_namesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    version_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    local_language_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => LanguagesRelationFilter, {nullable:true})
    languages?: LanguagesRelationFilter;

    @Field(() => VersionsRelationFilter, {nullable:true})
    versions?: VersionsRelationFilter;
}

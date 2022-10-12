import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { versionsWhereInput } from '../versions/versions-where.input';

@InputType()
export class VersionsListRelationFilter {

    @Field(() => versionsWhereInput, {nullable:true})
    every?: versionsWhereInput;

    @Field(() => versionsWhereInput, {nullable:true})
    some?: versionsWhereInput;

    @Field(() => versionsWhereInput, {nullable:true})
    none?: versionsWhereInput;
}

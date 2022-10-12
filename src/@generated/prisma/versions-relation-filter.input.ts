import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { versionsWhereInput } from '../versions/versions-where.input';

@InputType()
export class VersionsRelationFilter {

    @Field(() => versionsWhereInput, {nullable:true})
    is?: versionsWhereInput;

    @Field(() => versionsWhereInput, {nullable:true})
    isNot?: versionsWhereInput;
}
